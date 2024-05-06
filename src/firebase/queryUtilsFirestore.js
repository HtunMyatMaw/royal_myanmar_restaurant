import {
    where,
    orderBy,
    and,
    or
}
    from 'firebase/firestore';

function generateWhereList(wheres) {
    res = []
    wheres = wheres ?? []
    wheres.forEach(obj => res.push(where(obj.key, obj.operator, obj.value)))
    return res
}

function generateOrderList(orders) {
    res = []
    orders = orders ?? []
    orders.forEach(key => res.push(orderBy(key)))
    return res
}

export {
    where,
    orderBy,
    and,
    or,
    generateWhereList,
    generateOrderList
}