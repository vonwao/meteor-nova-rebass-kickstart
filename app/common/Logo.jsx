const Logo = props => {
  if (props.logoUrl) {
    return (
      <h1 className="logo-image ">
        <a href="/"> TEST
          <img src={props.logoUrl} alt={props.siteTitle} style={{maxWidth: "100px", maxHeight: "100px"}} />
        </a>
      </h1>
    )
  } else {
    return (
      <h1 className="logo-text"><a href="/">TEST{props.siteTitle}</a></h1>
    )
  }
}

module.exports = Logo;