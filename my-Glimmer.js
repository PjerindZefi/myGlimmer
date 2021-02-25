

     function currentDateTime()

        {

            var date=new Date();//object of Date

            //display date and time

            alert("Current date and time is "+date.toLocaleString());

        }

        //function that show yesterdays date and time

        function yesterdayDateTime()

        {

            var date=new Date();//object of Date

            date.setHours(date.getHours()-24)//setHours() -24

            //display yesterday date and time

            alert("Yesterday date and time is "+date.toLocaleString());

        }

        //function that show date and time 10 years ago

        function tenYearsDateTime()

        {

            var date=new Date();//object of Date

            //getting full year and subtracting 10 years

            date.setFullYear(date.getFullYear()-10)

            //display yesterday date and time

            alert("10 years ago's date and time  "+date.toLocaleString());

        }

        //function that show date and time one week from today

        function oneWeekDateTime()

        {

            var date=new Date();//object of Date

            date.setDate(date.getDate()+parseInt(7))//adding 7 days to current date

            //display date and time after one week

            alert("Date and time after one week "+date.toLocaleString());

        }