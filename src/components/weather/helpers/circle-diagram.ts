class CircleDiagram {
  value:number;
  constructor (value:number) {
    this.value = value;
  }
  circleFill (value:number) {
    return `<path class="circle__fill"
    stroke-dasharray="${value}, 100"
    d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831
      "
    />`;
  }
  render () {
    return `<svg viewBox="0 0 36 36" class="circle">
    <path class="circle__background"
      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831
      "/>
    ${this.value === 0 ? '' : this.circleFill(this.value)}
    <text x="8" y="20.35" class="circle__value">${this.value}%</text>
  </svg>`
  }
}

export default CircleDiagram;