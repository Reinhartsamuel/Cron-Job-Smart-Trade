async function main() {
    try {
       const promise = await fetch('https://byscript.io/api/3commas/cron/get-smart-trades');
       const kuda = await promise.json();
        console.log(kuda,'kuda'); 
        console.log(typeof(kuda));
        console.log(Object.keys(kuda));
       return kuda;
    } catch (error) {
        return console.log(error.message)
    }
}


main();