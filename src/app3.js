import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')
$square.on('click',()=>{
    $square.toggleClass('active')
//    toggleClass如果没有就加上，反之就去掉
})