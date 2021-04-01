/*function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

const f = () => console.log('help me')

function wrapper(original, time) {
    return () => {
            original()
            sleep(time)
    }
}

const q = wrapper(f, 3000)

q()
q()
q()*/
let origObj = {x: {}}
proxyObj = (target) => (
    new Proxy(target, {
        get(target, prop) {
            if(prop === 'toJSON') return target[prop]
            if(typeof target[prop] === 'undefined') {
                return target[prop] = proxyObj(target[prop] = {})
            }
            if(typeof target[prop] === 'object' && !(target[prop])) return target[prop] = proxyObj(target[prop] = {})
            return target[prop]
        },
        set(target, prop, value) {
            console.log(origObj)
            return target[prop] = value
        }

    })
)
const lol = proxyObj(origObj)
lol.a = 1
lol.l = 'kek'
//lol.x.y.z = 4
//lol.b.c.d = 2
//lol.f.hj.k.a
console.log(origObj)
console.log(JSON.stringify(origObj))
