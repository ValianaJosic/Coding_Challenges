const isAnagram = (first, second) => {

    let str1 = first.toLowerCase()
    let str2 = second.toLowerCase()

    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')

    return str1 === str2

}

console.log(isAnagram('friend', 'Finder'))
