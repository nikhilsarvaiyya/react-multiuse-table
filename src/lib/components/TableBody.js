import React from 'react';

const TableBody = (props) => {

    if (!props.data) {
        return "Loading..."
    }
    return props.data.map((d, i1) => {

        return <tr key={i1}>
            <td style={{
                padding: ".5em",
                border: "1px solid lightgrey"
            }}>
                <input type="checkbox" />
            </td>
            {d.map((m, i2) => {
                return <td
                    key={i2}
                    style={{
                        padding: ".5em",
                        border: "1px solid lightgrey"
                    }}>
                    {m}
                </td>
            })}
            <td style={{
                padding: ".5em",
                border: "1px solid lightgrey"
            }}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVQ4jc2SwQ1AQBREX5BogiJQgxroRA1utEMPbq4uqnAQDjaxlz8JBzHJJD/5s7OZ2YU/IwVGx+SNQQscjq0lCoTBZMyPUAC5EkRiFwMlV4QZ2J7e3nB30Fgi1YGPw1qoCJ13uLdEoTDYuXIvwCp0JmruDipLpDrIvFk+pYUEGBxffeVvcAIAMhhp+VgEPQAAAABJRU5ErkJggg==" />
            </td>
        </tr>
    })

}

export default TableBody;

