import React , { useState } from 'react'

const LiveStream = () => {

    return (
        <>
            {/* YOUTUBE LIVE FRAME  START */}
            <section className="youtube-frame-section d-flex pb-5">
                <div className="youtube-frame-body">
                    <div className="page-head">
                        <h1>Canlı Yayım</h1>
                    </div>

                     <iframe className="d-flex" src="https://www.youtube.com/embed/YrakZaw0dYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> 
                </div>

            </section>
            {/* YOUTUBE LIVE FRAME  END */}
        </>
    )
}

export default LiveStream