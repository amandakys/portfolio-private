import * as React from "react"
import Image from "gatsby-image"
import "../utils/css/components/slider.css"
import { StaticQuery } from "gatsby"

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0.5,
    }
    this.ref = React.createRef()
    this.onMoveContent = this.onMoveContent.bind(this)
  }

  componentDidMount() {
    var container = document.getElementById("container")
    this.setState({ width: container.clientWidth })
  }

  onMoveContent(e) {
    e.preventDefault()
    const x = e.pageX
    const rect = e.target.getBoundingClientRect()
    const offsetX = x - rect.x
    const progress = (offsetX / this.state.width) % 1
    this.setState({ progress: progress })
    // console.log(x);
    // console.log(rect);
  }

  render() {
    return (
      <div id="container" className="container" onMouseEnter={this.setupPage}>
        <Image
          fluid={this.props.data.leftPic.childImageSharp.fluid}
          className="kg-image"
          imgStyle={{ display: "none" }}
        />
        <div
          className="right-wrapper"
          ref={this.ref}
          onTouchMove={this.onMoveContent}
          onMouseMove={this.onMoveContent}
        />

        <div
          className="left-wrapper"
          ref={this.ref}
          style={{ width: `${100 * this.state.progress}%` }}
          onTouchMove={this.onMoveContent}
          onMouseMove={this.onMoveContent}
        />
        <div className="content"></div>
      </div>
    )
  }
}

const sliderQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    leftPic: file(relativePath: { eq: "code-andi-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rightPic: file(relativePath: { eq: "art-andi-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery query={sliderQuery} render={data => <Slider data={data} />} />
)
