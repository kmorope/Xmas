function getRandomSize() {
    let r = randomGaussian() * 2.5;
    return constrain(abs(r * r), 2, 36);
    // while (true) {
    //     let r1 = random(1);
    //     let r2 = random(1);
    //     if (r2 > r1) {
    //         return r1 * 36;
    //     }
    // }
}


class Snowflake {
    constructor(sx, sy) {
        let x = sx || random(width);
        let y = sy || random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 5);
        this.acc = createVector();
        this.r = getRandomSize();
    }

    applyForce(force) {
        let f = force.copy();
        f.mult(this.r);
        this.acc.add(f);
    }

    randomi

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.r * 0.2);        
        if (this.vel.mag() < 1){
            this.vel.normalize();
        }
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    render() {
        stroke(255);
        strokeWeight(this.r);
        point(this.pos.x, this.pos.y);
    }

    offScreen() {
        return (this.pos.y > height + this.r);
    }
}