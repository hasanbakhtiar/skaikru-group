
// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var      -> variable (global)
// const    -> constant (local)
// let      -> let      (local)



// // global
// if (true) {
//     // local global
//     if (true) {
//         // local global

//         if (true) {
//             // local
//             var a = 5;
//             console.log(a);
//         }
//     }

// }





// const a  =5;
// a = 10;
// console.log(a);



// if - eger
// else - deyilse
// else if - deyilse eger


// const myNumberOne = 20;
// const myNumberTwo = 20;

// if ( myNumberOne <= myNumberTwo) {
//     console.log('successfull');
// } else if (myNumberOne === myNumberTwo) {
//     console.log('successfull second');
// }
// else {
//     console.log("wrong");
// }




const clock = prompt();
if (clock >= 5 && clock <= 12) {
    console.log('good morning');
    if (clock === 7) {
        console.log("get up");
    }else if(clock == 9){
        console.log('have a breakfast');
    }else{
        console.log('do something');
    }
} else if (clock >= 13 && clock <= 18) {
    console.log('good afternoon');
} else if (clock >= 19 && clock <= 21) {
    console.log('good evening');
} else if (clock >= 22 && clock <= 23) {
    console.log('good night');
} else {
    console.log('no time');
}
// 0 - 3 korpe
// 4 - 13 usaq
// 14 - 18 yeniyetme
// 19-35 genc
// 36 - 50 orta yas
// 51-70 yasli
// 71+ rip



// const info = "5a";


// switch (info) {
//     case "Hello":
//         console.log('tello');
//         break;
//     case 5:
//         console.log('this is 5');
//         break;
//     default:
//         console.log('no o my lesson');
//         break;
// }


