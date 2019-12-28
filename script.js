var count = 0

function fun(n)
{
    if(document.querySelectorAll('td')[n].innerHTML == '')
    {
    count = count + 1 
    if(count % 2 == 0)
    {
        document.querySelectorAll('td')[n].innerHTML  ='O'   
    } else
    {
        document.querySelectorAll('td')[n].innerHTML  = 'X'   
    }
    if(count == 9)
    {
        document.getElementById('winner').innerHTML = `It's a draw match `
        document.getElementById('restart').style.visibility = "visible"
    }
    check()
}
}

function check()
{
var b11 = document.getElementById('b11').innerHTML
var b12 = document.getElementById('b12').innerHTML
var b13 = document.getElementById('b13').innerHTML
var b21 = document.getElementById('b21').innerHTML
var b22 = document.getElementById('b22').innerHTML
var b23 = document.getElementById('b23').innerHTML
var b31 = document.getElementById('b31').innerHTML
var b32 = document.getElementById('b32').innerHTML
var b33 = document.getElementById('b33').innerHTML
    if(b11 == b12 && b12 == b13 && b13 == b11 && b11 != '')
    {
        winner(b11)
    }
    if(b21 == b22 && b22 == b23 && b23 == b21 && b21 != '')
    {
        winner(b21)
    }
    if(b31 == b32 && b32 == b33 && b33 == b31 && b31 != '')
    {
        winner(b31)
    }
    if(b11 == b21 && b21 == b31 && b31 == b11 && b11 != '')
    {
        winner(b11)
    }
    if(b12 == b22 && b22 == b32 && b32 == b12 && b12 != '')
    {
        winner(b12)
    }
    if(b13 == b23 && b23 == b33 && b33 == b13 && b13 != '')
    {
        winner(b13)
    }
    if(b11 == b22 && b22 == b33 && b33 == b11 && b11 != '' )
    {
        winner(b11)
    }
    if(b13 == b22 && b22 == b31 && b31 == b13 && b13 != '')
    {
        winner(b13)
    }
}
function winner(n)
{
    for(i=0;i<9;i++)
    {
        document.querySelectorAll('td')[i].innerHTML  = n 
    }
    document.getElementById('restart').style.visibility = "visible"
    document.getElementById('winner').innerHTML = `${n} is the winner `
}