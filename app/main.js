/**
 * 1.多重判断是可以使用  Array.includes
 * 2.更少的嵌套，尽早return
 * 3.使用默认参数和结构
 * 4.倾向于遍历对象而不是switch
 * 5.对  所有/部分的判断   Array   every/some的使用
 */

// eg1
function test(fruit) {
    if (fruit == 'apple' || fruit == 'strawberry') {
        console.log("red")
    }
}

function test1(fruit) {
    const arr = ['apple', 'strawberry'];
    if (arr.includes(fruit)) {
        console.log('red')
    }
}

// test1('apple')

// eg2  有效水果，打印水果数量
function checkFruit(fruit, quantity) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
    if (fruit) {
        if (redFruits.includes(fruit)) {
            console.log('red')
            if (quantity && quantity > 10) {
                console.log('big fruit')
            }
        }
    }
    throw new Error('error:no Fruit!')
}

// checkFruit(null)
// 当发现无效语句是，尽早return
function checkFruit1(fruit, quantity) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
    if (!fruit) throw new Error('error: no fruit')
    if (redFruits.includes(fruit)) {
        console.log('red')
        if (quantity && quantity > 10) {
            console.log('big fruit')
        }
    }
}

// 我们还可以尽早return错误，这样可以减少if/else判断，但会加重代码逻辑思考的负担
// 使用原始的if/else 结构清晰明了，但是可能代码会臃肿，作好取舍
function checkFruit2(fruit, quantity) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
    console.log(!fruit)
    if (!fruit) throw new Error('error: no fruit');
    if (!redFruits.includes(fruit)) return;
    console.log('red')
    if (quantity && quantity > 10) {
        console.log('big fruit')
    }
}
// checkFruit2('apple', 12)

// 默认参数与结构赋值
function defParam(fruit, quantity) {
    if (!fruit) return;
    const q = quantity || 1;
    console.log(`we have ${q} ${fruit}`)
}
defParam('apple', 5)

function defParam2(fruit, quantity = 1) {
    console.log(fruit && `we have ${quantity} ${fruit}`)
}
defParam2('orange', 10)

// 参数是对象的结构赋值
function objParam(user) {
    if (user && user.name) {
        console.log(user.name)
    }
    console.log('no user')
}

function objParam1({ name } = {}) {
    console.log(name || 'no user')
}

objParam1({ name: 'zhangsanfeng' })


// 倾向于对象遍历，而不是switch语句
function fruitColor(color) {
    switch (color) {
    case 'red':
        return ['apple', 'strawberry']
    case 'yellow':
        return ['banana', 'orange']
    default: return []   
    }
}

const fruitColorObj = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'orange']
}

function fruitColor1(color) {
    return fruitColorObj[color] || []
}

function fruitColor2(color) {
    const fruitMap = new Map()
        .set('red', ['apple', 'strawberry'])
        .set('yellow', ['banana', 'orange'])
    return fruitMap.get(color) || []
}

console.log(fruitColor2('yellow'))

// some 一个返回true,值为true   every  每个返回true,值true
const testSome = [1,2,3,4].some(item => {
    return item%2 === 0;
})
console.log('test--some',testSome)

const testevery = [1,2,3,4].every(item => {
    return item > 5;
})
console.log(testevery)