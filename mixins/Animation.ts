import { Vue, Component } from 'vue-property-decorator';

export interface MethodObjInterface {
  name: string;
  params: Array<number | string | Array<string | number>>;
}

export interface AnimationInterface {
  methodObj: MethodObjInterface;
  target: string;
  options?: Record<string, number>;
}

@Component
export class Animation extends Vue {
  private increaseNumberAnimation(sec: number, maxNumber: number, htmlElementName: string) {
    const htmlElement = this.$refs[htmlElementName] as HTMLElement;
    if (parseInt(htmlElement.innerText) >= maxNumber) return;
    setTimeout(() => {
      htmlElement.innerText = `${parseInt(htmlElement.innerText) + 1}`;
      this.increaseNumberAnimation(sec, maxNumber, htmlElementName);
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
      const scrollPercentage = this.getScrollPercentage(0.1, path);
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

  private createObserver(animation: AnimationInterface) {
    const options = {
      threshold: 0.5,
    };

    return new IntersectionObserver(
      (entries, _observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const methodObj: MethodObjInterface = animation.methodObj;
            const key = animation.methodObj.name as keyof Animation;
            this[key](...methodObj.params);
          }
        });
      },
      { ...options, ...animation.options },
    );
  }

  startObserver(animations: Array<AnimationInterface>) {
    animations.forEach((animation) => {
      const htmlElement = this.$refs[animation.target] as HTMLElement;
      const observer = this.createObserver(animation);
      observer.observe(htmlElement);
    });
  }
}
