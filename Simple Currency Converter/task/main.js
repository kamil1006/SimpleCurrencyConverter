//Write your code here

// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log('Welcome to Currency Converter!');
console.log('1 USD equals 1 USD');
console.log('1 USD equals 113.5 JPY');
console.log('1 USD equals 0.89 EUR');
console.log('1 USD equals 74.36 RUB');
console.log('1 USD equals 0.75 GBP');
//console.log('I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP');
//console.log('Type the currency you wish to convert: USD');
//console.log('To: > JPY');
//console.log('Amount: > 1');
//console.log('Result: 1 USD equals 113.5000 JPY');
let usd_usd = 1;
let usd_jpy = 113.5;
let usd_eur = 0.89;
let usd_rub = 74.36;
let usd_gbp = 0.75;

let lista_walut = ['USD', 'JPY', 'EUR', 'RUB', 'GBP'];
let lista_kursow_usd_vs = [1, 113.5, 0.89, 74.36,0.75];
let akcja = 1;

while (akcja != 2){
    console.log('What do you want to do?');
    console.log('1-Convert currencies 2-Exit program');
    let inpt = input('');
    if (inpt == 1){
        akcja =1;
        //----------------------------------------------------

        console.log('What do you want to convert?');
//let from_currency = 'USD';//input('Type the currency you wish to convert: ');
        let from_currency = input('From: ');

        from_currency = from_currency.toUpperCase();
        let test1 = false;
        let test2 = false;
        let amount = 0;
        let name_from = lista_walut.indexOf(from_currency);
        let to_currency;
        let name_to;

        if(name_from == -1){
            console.log('Unknown currency');
        }else {
            to_currency = input('To: ');
            to_currency = to_currency.toUpperCase();
            name_to = lista_walut.indexOf(to_currency);
            test2 = true;

            if(name_to == -1 ){
                console.log('Unknown currency');

            }else{
                amount = input('Amount: ');

                // console.log(name_to);
                test1 = true;

            }
        }



        if(amount<1){
            console.log('The amount cannot be less than 1');

        }else if(isNaN(amount)){
            console.log('The amount has to be a number');
        }else if (test1 && test2){

            let kurs_from = lista_kursow_usd_vs[name_from];
            let kurs_to = lista_kursow_usd_vs[name_to];
            let resultat = amount/kurs_from * kurs_to;
            console.log('Result: '+amount+' '+from_currency+' equals '+ Number(resultat).toFixed(4) +' '+ to_currency);
        }





        //----------------------------------------------------
    }else if(inpt == 2){
        akcja =2;
    }else {
        console.log('Unknown input');


    }

}
console.log('Have a nice day!')
