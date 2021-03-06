import React from 'react';

const TableHead = (props) => {
    const { headers,
        shortByKey,
        shortOrder,
        handleName,
        handleOrder,
        handleKeyIndex,
        rmtCheckAll,
        handleColumnSearch,
        columnSearch,
        isActions,
        handleCheckAllAction
    } = props

    if (!headers) {
        return "Loading..."
    }

    let mapHeaders = headers;
    if (headers && headers.filter(f => { return f.listed }).length !== 0) {

        mapHeaders = headers.filter(f => { return f.listed })
    } else {

        mapHeaders = headers
    }

    return <tr >
        {rmtCheckAll &&
            <th className="tx-c p-s l-0" style={{ width: "27px" }}>
                <div>
                    <input
                        type="checkbox"
                        className="m-0"
                        onChange={(e) => { handleCheckAllAction(e.target.checked) }}
                    />
                </div>
            </th>}
        {mapHeaders && mapHeaders.map((h, i) => {
            return <th
                className="cr-p"
                onClick={() => {
                    handleName(h);
                    handleOrder(h.key === shortByKey ? shortOrder : -shortOrder);
                    handleKeyIndex(i)
                }}
                style={{ minWidth: "120px" }}
                key={i}>
                <div className="lh-1 df ws-nr" >
                    <label style={{
                        padding: "5px"
                    }} className="fl cr-p">{h.label}</label>
                    <div className="fr" style={{ marginLeft: "auto" }} >
                        {shortByKey.key !== h.key && <img alt="sort" className=" rmtIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAg0lEQVQ4jWNgGAU4QCIUUwWUMzAw/IfiemoaBsMd5BjEyMDA0IvFMBieClVDtGGT8BgGw7MYGBiYiDEwiAjDYDgQm2vQATMDA4MulMYH/jIwMFyG0nBAlJMpBRR5GRsgNlJmMpDgQ0LJZgoDCckGGVAtYSODMiTD6ig1DAaoWjgMMwAAZjtKHqTQNrUAAAAASUVORK5CYII=" />}
                        {shortByKey.key === h.key && shortOrder === 1 && <img className=" rmtIcon" alt="sort" style={{ margin: "2px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAxElEQVQ4jaXRTU5CMRSG4QeBRCWCBi8RF+HIObBVVoKSwEQXYZzo1KEEdGCvaUhvb41f0qSnp++b/vDPdDK9Pu7D/Am71KZuBp7jFpe4wSv2JYIeZqiitTNMguSQE9TwJCE+T0liQReLBjiWVHjBF5xEzeujYzelwrgujn9h6ucBc/nEW130okYHdxi2CD7wLlwhziIslox5ynyKxwJ4HfYmM8AqA29w0XJFAzw0wG3v85shthH8jKtSuM4IyzBGf4WL8w1I/jc6Uk9dWQAAAABJRU5ErkJggg==" />}
                        {shortByKey.key === h.key && shortOrder === -1 && <img className=" rmtIcon" alt="sort" style={{ transform: "rotate(180deg)", margin: "2px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAxElEQVQ4jaXRTU5CMRSG4QeBRCWCBi8RF+HIObBVVoKSwEQXYZzo1KEEdGCvaUhvb41f0qSnp++b/vDPdDK9Pu7D/Am71KZuBp7jFpe4wSv2JYIeZqiitTNMguSQE9TwJCE+T0liQReLBjiWVHjBF5xEzeujYzelwrgujn9h6ucBc/nEW130okYHdxi2CD7wLlwhziIslox5ynyKxwJ4HfYmM8AqA29w0XJFAzw0wG3v85shthH8jKtSuM4IyzBGf4WL8w1I/jc6Uk9dWQAAAABJRU5ErkJggg==" />}
                    </div>
                </div>
                <span className="resize-handle"></span>

            </th>
        })}

        {isActions && <th className="tx-c cr-p p-s r-0" style={{ width: "24px" }}>
            {!columnSearch && <img
                alt="search"
                className=" rmtIcon"
                onClick={() => handleColumnSearch(true)}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAwElEQVQ4jdXSsWoCQRDG8d+ZEEWbWAkKh1iIjZB0FiGFjS9k6TPYamulpkhAAnkOy1R5hJBWUqS4EyTcnXt2ftXuN/MfZnYnwif2ymmIEX7gHe0ScDNlakejjQ+0AuA6XjH4H4ixw30BfIcNHvMS+nhDIyN2gxWezrX4gBdUT7wIS0yygCjDe8YMX+k9xkIyYrDWktduYluUeJvj/+I7PR+KClTKtHVdBRoYhxTI+kaSPZ+ih46cHQhRF/NL4SD9AXMyFQWiX47OAAAAAElFTkSuQmCC" />
            }
        </th>}
    </tr>
}

export default TableHead;

