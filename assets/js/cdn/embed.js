!function(e, t) {
    var d = "createElement"
        , n = "getElementsByTagName"
        , a = "setAttribute"
        , c = document.getElementById(e);
    c && c.parentNode && c.parentNode.removeChild(c),
        (c = (c = document[d + "NS"] && document.documentElement.namespaceURI) ? document[d + "NS"](c, "script") : document[d]("script"))[a]("id", e),
        c[a]("src", t),
        (document[n]("head")[0] || document[n]("body")[0]).appendChild(c)
}("altmetric-embed-js", "https://d1bxh8uas1mnw7.cloudfront.net/assets/altmetric_badges-1ddd8946433e6d1f4cf99af8aedd73f1ef52e05011eb2c886292f14aa53fed0f.js");
