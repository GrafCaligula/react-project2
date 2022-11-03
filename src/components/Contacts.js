import starlet from "./images/Star 1.png"

export default function Contacts() {
  return (
    <div>
      <img src="" />
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
      <img src={starlet} alt="starlet"/>
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src={starlet} alt="starlet"/>
        <p>mr.whiskerson@catnap.meow</p>
      </div>
    </div>
  )
}