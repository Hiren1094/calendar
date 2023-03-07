import React from 'react';

export function Dayes(Details) {

    const { Indexing } = Details;

    // Get days.
    function getDays() {

        var week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        
        var firstdayarra = [];
        var adddays = '';
        for (let i = 0; i < week.length; i ++) {

            if( i > 0 ){
                
                if( week[Indexing + i] === undefined &&  (Indexing + i) === 7 ){
                    adddays = week[0];
                }else if( week[Indexing + i] === undefined &&  (Indexing + i) === 8 ){
                    adddays = week[1];
                }else if( week[Indexing + i] === undefined &&  (Indexing + i) === 9 ){
                    adddays = week[2];
                }else if( week[Indexing + i] === undefined &&  (Indexing + i) === 10 ){
                    adddays = week[3];
                }else if( week[Indexing + i] === undefined &&  (Indexing + i) === 11 ){
                    adddays = week[4];
                }else if( week[Indexing + i] === undefined &&  (Indexing + i) === 12 ){
                    adddays = week[5];
                }else{
                    adddays = week[Indexing + i];
                }
                firstdayarra.push(adddays);

            }else{
                
                firstdayarra.push(week[Indexing]);
            }

            
        }
        
        var filtered = firstdayarra.filter(function(x,index) {
            
            return x !== undefined;
        });

        
        return filtered;
    }

    return (
        <>

            {
                getDays().map((daysDetails,index) => {
                    
                    var daysClass = '';
                    if(daysDetails === 'SUN'){
                        daysClass = 'holiday';
                    }
                    return (
                        <>
                            <td className={daysClass} key={index} id="days">{daysDetails}</td>
                        </>
                    )
                })
            }
            
        </>
    )
}