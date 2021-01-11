import {v4 as uuid4} from 'uuid'

function listSongs() {
    return [
        {
            name:'Going Back',
            artist:'Swørn',
            cover:'https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=10310',
            color:['#F9F9F9','#F0B861'],
            id: uuid4(),
            active:true,
        },
        {
            name:'Bandwidth',
            artist:'Gustav Gustav, Dave Kellner',
            cover:'https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=10319',
            color:['#DB5D82','#365989'],
            id: uuid4(),
            active:false,
        },
        {
            name:'Sleepover',
            artist:'Nymano, JK the Sage',
            cover:'https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=10130',
            color:['#EE461F','#34C368'],
            id: uuid4(),
            active:false,
        },
        {
            name:'Fields',
            artist:'Fujitsu, Ajmw',
            cover:'https://chillhop.com/wp-content/uploads/2020/07/1ec54f230c2c8d1b74f1f9b2c27d67cb3de761c4-1024x1024.jpg',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=9406',
            color:['#EE461F','#090097'],
            id: uuid4(),
            active:false,
        },
        {
            name:'Waiting for You',
            artist:'Sitting Duck, Hoffy Beats, Outs',
            cover:'https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=9651',
            color:['#A0ADB3','#BFB073'],
            id: uuid4(),
            active:false,
        },
        {
            name:'fiveyearsago',
            artist:'Psalm Trees',
            cover:'https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=9021',
            color:['#914E59','#C8EEFB'],
            id: uuid4(),
            active:false,
        },
        {
            name:'With Time',
            artist:'Leavv, The Field Tapes',
            cover:'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=9925',
            color:['#6D705C','#202020'],
            id: uuid4(),
            active:false,
        },
        {
            name:'Toft',
            artist:'Felty, Ezzy',
            cover:'https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=9021',
            color:['#914E59','#14100C'],
            id: uuid4(),
            active:false,
        },
    ]
}

export default listSongs;