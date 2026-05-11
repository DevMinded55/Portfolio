import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

/**
 * Adds a `reveal` class immediately and toggles `is-visible` once the host
 * element enters the viewport. Optional inputs allow tuning the variant
 * (slide direction) and the start delay for staggered groups.
 */
@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() revealVariant: '' | 'left' | 'right' | 'scale' = '';
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;

    this.renderer.addClass(el, 'reveal');
    if (this.revealVariant) {
      this.renderer.addClass(el, `reveal--${this.revealVariant}`);
    }
    if (this.revealDelay > 0) {
      this.renderer.setStyle(el, '--reveal-delay', `${this.revealDelay}ms`);
    }

    if (
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined'
    ) {
      this.renderer.addClass(el, 'is-visible');
      return;
    }

    const reduceMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduceMotion) {
      this.renderer.addClass(el, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'is-visible');
            if (this.revealOnce) {
              this.observer?.unobserve(entry.target);
            }
          } else if (!this.revealOnce) {
            this.renderer.removeClass(entry.target, 'is-visible');
          }
        }
      },
      { threshold: this.revealThreshold, rootMargin: '0px 0px -10% 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
