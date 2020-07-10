var ordinallabels = [0, 1, 2, 3, 4];
var ordinallabels0 = [0, 1, 2, 3];
var Skills = [new Skill('Java', '3'), new Skill('SQL', "3"), new Skill('VBA', "3")]


ordinalbar("Java", ordinallabels0, 2);
ordinalbar("SQL", ordinallabels, 0);

function ordinalbar(site_anchor_id, ordinals, value) {
    let barwidth = 1000;
    let barheight = 100;
    let steplength;
    let n;
    if (Array.isArray(ordinals) && ordinals.length !== 0) {
        n = ordinals.length;
        steplength = barwidth / n
    } else {
        console.log("No ordinalvalues" + ordinals + " OrdinalType " + typeof ordinals)
        return;
    }

    let ns = 'http://www.w3.org/2000/svg'

    var svg = document.createElementNS(ns, 'svg')
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    svg.setAttribute("viewBox", "-5 -5 1010 110")


    var rect = document.createElementNS(ns, 'rect')
    rect.setAttribute('width', barwidth)
    rect.setAttribute('height', barheight)
    rect.setAttribute('rx', '50')
    rect.setAttribute('ry', '50')
    rect.setAttribute('style', 'fill:#fff;stroke-width:10;stroke:#000')
    svg.appendChild(rect)


    // bar for rounded left corner
    var rectfill0 = document.createElementNS(ns, 'rect')
    rectfill0.setAttribute('width', "100")
    rectfill0.setAttribute('height', barheight)
    rectfill0.setAttribute('rx', '50')
    rectfill0.setAttribute('ry', '50')

    if (value == 0) {
        rectfill0.setAttribute('style', 'fill:#fff;stroke:#000;stroke-dasharray:10')
    } else {
        rectfill0.setAttribute('style', 'fill:green;')
        var rectfill = document.createElementNS(ns, 'rect')
        rectfill.setAttribute('x', '50')
        rectfill.setAttribute('width', ((value +1) * steplength) - 50)
        rectfill.setAttribute('height', barheight)
        rectfill.setAttribute('style', 'fill:green;')
        svg.appendChild(rectfill)
    }
    svg.appendChild(rectfill0)


    let sl = 0;



    for (let i = 0; i < n; i++) {

        let text = document.createElementNS(ns, 'text')
        text.setAttribute("x", sl + (steplength / 2))
        text.setAttribute("y", "70")
        text.setAttribute("font-size", "50")

        text.setAttribute("text-anchor", "middle")
        text.innerHTML = ordinals[i]
        if (i == value) {
            text.setAttribute("font-weight", "bold")
            text.setAttribute("font-size", "80")
        } else {

            text.setAttribute("font-weight", "lighter")
        }
        svg.appendChild(text)

        if (!(i == n - 1)) {
            let line = document.createElementNS(ns, 'line')
            line.setAttribute("x1", sl + steplength);
            line.setAttribute("x2", sl + steplength);
            line.setAttribute("y1", "5");
            line.setAttribute("y2", "100");
            line.setAttribute("style", "stroke-width:3;stroke:#000;stroke-dasharray:10")
            svg.appendChild(line)
        }

        sl = sl + steplength;

    }
    let div = document.getElementById(site_anchor_id)
    if (div == null) {
        console.log("site_anchor_id not found")
    } else {
        div.appendChild(svg)
    }
}