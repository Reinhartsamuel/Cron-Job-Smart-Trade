async function main() {
    try {
       const promise = await fetch('https://www.byscript.io/api/3commas/cron/update-market-code');
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