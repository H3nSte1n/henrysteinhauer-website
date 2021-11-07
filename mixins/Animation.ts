import { Vue, Component } from 'vue-property-decorator';

export interface MethodObjInterface {
  name: string;
  params: Array<number | string | Array<string | number>>;
}

export interface IAnimation {
  methodObj: MethodObjInterface;
  target: string;
  options?: Record<string, number>;
}

@Component
export class Animation extends Vue {
  private increaseNumberAnimation(sec: number, maxNumber: number, htmlElementName: string, currentNumber: number) {
    const htmlElement = this.$refs[htmlElementName] as HTMLElement;
    if (currentNumber >= maxNumber) return;
    setTimeout(() => {
      htmlElement.innerText = `${currentNumber + 1}`;
      this.increaseNumberAnimation(sec, maxNumber, htmlElementName, currentNumber + 1);
    }, sec);
  }

  private revealAnimation(element: string) {
    if (!element) return;
    const htmlElement = this.$refs[element] as HTMLElement;
    if (htmlElement.classList.contains(`${element}--visible`)) return;
    htmlElement.classList.add(`${element}--visible`);
  }

  drawSVG(totalLength: number, element: string) {
    window.requestAnimationFrame(() => {
      const path = this.$refs[element] as HTMLElement;
      const scrollPercentage = this.getScrollPercentage(0.2, path);
      const drawLength = totalLength * scrollPercentage;
      if (drawLength < totalLength && drawLength > 0) path.style.strokeDashoffset = `${drawLength}`;
    });
  }

  initPath(pathName: string): number {
    const path = this.$refs[pathName] as SVGGeometryElement;
    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    return totalLength;
  }

  getScrollPercentage(gapBottom: number, path: HTMLElement) {
    const boundaries = path.getBoundingClientRect();
    return boundaries.y / window.innerHeight + gapBottom;
  }

  animateOnScroll(method: string, params: Array<number | string>) {
    document.addEventListener('scroll', () => {
      this[method as keyof Animation](...params);
    });
  }

  private createObserver(animation: IAnimation) {
    const options = {
      threshold: 0.5,
    };

    return new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const methodObj: MethodObjInterface = animation.methodObj;
            const key = animation.methodObj.name as keyof Animation;
            this[key](...methodObj.params);
            observer.unobserve(entry.target);
          }
        });
      },
      { ...options, ...animation.options },
    );
  }

  startObserver(animations: Array<IAnimation>) {
    animations.forEach((animation) => {
      const htmlElement = this.$refs[animation.target] as HTMLElement;
      const observer = this.createObserver(animation);
      observer.observe(htmlElement);
    });
  }
}
