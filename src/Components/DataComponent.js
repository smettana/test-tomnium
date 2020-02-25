import React, { Fragment, useState, useEffect } from 'react';
import { data } from '../data';

export const DataComponent = () => {

    const [fetchedData, setFetchedData] = useState({});

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (true) {
                    resolve(data);
                } else {
                    reject();
                }
            }, 2000);
        });

        promise
            .then(data => {
                setFetchedData(data)
            })
            .catch(err => console.log(err));
    }, []);


    const formatData = (item) => {
        switch (item) {
            case 'valid':
                return (
                    <div className="data-item__value valid">
                        <p>{`${fetchedData[item]}`}</p>
                    </div>
                )
            case 'timestamp':
                return (
                    <div className="data-item__value timestamp">
                        <p>{new Date(fetchedData[item]*1000).toLocaleDateString("en-US")}</p>
                    </div>
                )
            case 'base':
                return (
                    <div className="data-item__value base">
                        <p>{fetchedData[item]}</p>
                    </div>
                )
            case 'rates':
                    return (
                        <div className="data-item__value rates">
                            {
                                Object.keys(fetchedData[item]).map((rate)=>{
                                    return(
                                        <div className='rates__item' key={`${rate}_${Date.now()}`}>
                                            <div className="rates__item__name">{rate}</div>
                                            <div className="rates__item__value">{fetchedData[item][rate]}</div>
                                        </div>
                                    )
                                    
                                })
                            }       
                        </div>
                    )
            default:
                break;
        }
    }
    
    return (
        <div className="wrapper">
            <div className="title">
                <p>Презентационный компонент</p>
            </div>
            <br />
            <hr />
            <br />
            <div className="result-data">
                {
                    Object.keys(fetchedData).map(item => {
                        return (
                            <div className="data-item" key={`${item}_Date.now()`}>
                                <div className="data-item__title">
                                    <p>{item}</p>
                                </div>
                                {
                                    formatData(item)
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

