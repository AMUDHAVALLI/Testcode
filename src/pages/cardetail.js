import data from '../json';
import React, { useState } from "react";

function CarDetail() {
    // filter item
    const [result, setResult] = useState([])

    const filterItem = (event) => {
        debugger;
        let filterKey = event.target.value;
        let filterResult = Object.values(data).filter(item => item.location.includes(filterKey) ||
            item.Brands.includes(filterKey) || item.type.includes(filterKey) || item.owner.includes(filterKey))
        console.log(filterResult)
        // const finalfilter = ...filterResult;
        setResult(filterResult)
    }


    return (
        <>

            <div>
                <div>Filter the Details</div>
                <label>
                    Location:
                    <select name="selectedLocation" onChange={filterItem} defaultValue="">
                        <option value="puducherry">Puducherry</option>
                        <option value="chennai">Chennai</option>
                    </select>
                </label>


                {/* checkbox */}
                <div>Brands</div>
                <div className="form-check m-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="Brands"
                        value="Swift"
                        id="swiftDefault"
                        onChange={
                            filterItem
                        }
                    />
                    <label
                        className="form-check-label"
                        htmlFor="swiftDefault"
                    >
                        Swift
                    </label>
                </div>

                <div className="form-check m-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="Brands"
                        value="test 2"
                        id="swiftDefault"
                        onChange={
                            filterItem
                        }
                    />
                    <label
                        className="form-check-label"
                        htmlFor="swiftDefault2"
                    >
                        Test 2
                    </label>
                </div>

                <div>Body type:</div>
                <input type='text' name='type' onChange={filterItem} />

                <div>owners:</div>
                <input
                    type="radio"
                    id="owner"
                    value="first"
                    // checked="first"
                    onChange={filterItem
                    }
                />
                <label

                >
                    1st Owner
                </label>

                <input
                    type="radio"
                    id="owner"
                    value="second"
                    // checked="second"

                    onChange={filterItem
                    }
                />
                <label

                >
                    2nd Owner
                </label>

            </div>
            {
                result.map((item) => (
                    <div key={item.id} >
                        <div><img src={item.photo} /></div>
                        <div>{item.name}</div>
                        <div> {item.location}</div>
                        <div>{item.owner}</div>
                    </div>
                ))
            }
        </>
    );
}

export default CarDetail;
