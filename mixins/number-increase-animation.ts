import { Vue, Component } from 'vue-property-decorator';

export interface MethodObjInterface {
  name: string,
  params: Array<string>
}

export interface AnimationInterface {
  methodObj: MethodObjInterface,
  target: string
}

@Component
export class Animation extends Vue {

  private increaseNumberAnimation(sec: number, maxNumber: number, htmlElementName: HTMLElement) {
    const htmlElement = this.$refs[htmlElementName]
    if(parseInt(htmlElement.innerText) >= maxNumber) return
    setTimeout(() => {
      htmlElement.innerText = `${parseInt(htmlElement.innerText) + 1}`
      this.increaseNumberAnimation(sec, maxNumber, htmlElementName);
    }, sec)
  }

  private createObserver(animation: AnimationInterface) {
    const options = {
      threshold: 0.5
    }

    return new IntersectionObserver((entries, _observer) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          const methodObj: MethodObjInterface = animation.methodObj;
          this[animation.methodObj.name](...methodObj.params)
        }
      })
    }, options)
  }

  startObserver(animations: Array<AnimationInterface>) {
    animations.forEach((animation) => {
      const testHTMLElement = document.querySelector(animation.target)!
      const observer = this.createObserver(animation)
      observer.observe(testHTMLElement)
    })
  }
}
