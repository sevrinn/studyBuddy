import React, { useState }from 'react'
import Select from 'react-select'

const Bgcolor = () => {

    var colors = [
        {
            value: 1,
            label:"aliceblue"
        },
        {
            value: 2,
            label:"aquamarine"
        },
        {
            value: 3,
            label:"black"
        },
        {
            value: 4,
            label:"cornflowerblue"
        },
        {
            value: 5,
            label:"darkgray"
        },
        {
            value: 6,
            label:"ghostwhite"
        },
        {
            value: 7,
            label:"gold"
        },
        {
            value: 8,
            label:"forestgreen"
        },
        {
            value: 9,
            label:"lavenderblush"
        },
        {
            value: 10,
            label:"lightgoldenrodyellow"
        },
        {
            value: 11,
            label:"lightcyan"
        },
        {
            value: 12,
            label:"magenta"
        },
        {
            value: 13,
            label:"teal"
        },
        {
            value: 14,
            label:"violet"
        },
        {
            value: 15,
            label:"pink"
        },
        
    ];
    var [setColor, colorvalue] = useState(colors.label)
    const colorhandle = (e) =>
    {
        colorvalue(e.label)
    }
    return ( 
        <div style={{width:"75rem", marginLeft:47, marginBottom:10}}>
            <style>{'body {background-color:'+setColor+';}'}</style>
            <Select placeholder="Please select a background color" options={colors} 
            onChange={colorhandle}>
            </Select>


        </div>




     );
}
 
export default Bgcolor;