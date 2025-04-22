async function main() {
    try {
       const promise = await fetch('https://byscript.io/api/3commas/cron/get-smart-trades');
       const result = await promise.json();
       return console.log('result',result)
    } catch (error) {
        console.log(error.message)
    }
}


main();