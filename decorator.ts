function getKeyDetails(target: any, key: any) {
    console.log( target);
}

class UseDecorator {
    @getKeyDetails
    private a: number;
    b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    // @sumLogger
    showData() {
        // console.log(this.a, this.b);
    }
}

const useDeco = new UseDecorator(10, 20);
useDeco.showData();
