function letsGo() {
    var x0 = parseInt(prompt("Enter x0"));
    var y0 = parseInt(prompt("Enter y0"));
    var x1 = parseInt(prompt("Enter x1"));
    var y1 = parseInt(prompt("Enter y1"));

    const dx = x1 - x0,
        dy = y1 - y0,
        m = dy / dx,
        s = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy),
        xi = dx * 1.0 / s,
        yi = dy * 1.0 / s

    var x = x0,
        y = y0,
        out = [];
    var outRounded = [];

    out.push({
        x: x0,
        y: y0
    });
    outRounded.push({
        x: x0,
        y: y0
    });

    for (var i = 0; i < s; i++) {
        x += xi;
        y += yi;
        out.push({
            x: x,
            y: y
        });
        outRounded.push({
            x: Math.round(x),
            y: Math.round(y)
        });
    }

    console.log("dx : " + dx);
    console.log("dy : " + dy);
    console.log("m : " + m);

    console.log("Actual Values:")
    console.log(out);
    console.log("Rounded Values:")
    console.log(outRounded);

    var message = "Result Generated Successfully. See Results in Console. Right Click > Inspect \n";

    var message1 = "&copy; Ahammed Rohit &copy;";

    document.getElementById('values').innerHTML=message;
    document.getElementById('link').innerHTML = message1;
}