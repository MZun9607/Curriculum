import React from "react"
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';







export default function ContainerInformation( props ) {
    
    function existInfo(subtitle, link){
        if (!(subtitle==null || subtitle=="")){
            if(!(link==null || link==""))
            return (
                <a className="h-full w-full hover:text-normalmodeblue-700 hover:dark:text-darkmodeblue-300   text-normalmodeblue-400 dark:text-normalmodeblue-400 transition-colors duration-500" target="_blank" rel="noopener noreferrer" href={link}>
                    <h1 className="px-2 my-1 text-xl text-center sm:text-justify font-Poppins flex items-center justify-center sm:justify-normal ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    {subtitle}
                    </h1>
                </a>
            )
            else return (
                <h1 className="px-2 my-1 text-xl text-center sm:text-justify font-Poppins text-normalmodeblue-400 dark:text-normalmodeblue-400">
                    {subtitle}
                </h1>
        )
        }
            
        else return (<></>)
    }

    return (
        <div className="px-6 mt-5 py-5 hover:bg-neutral-200 hover:dark:bg-neutral-600 transition-colors duration-500">
            <h1 className="px-2 my-2 text-2xl lg:text-3xl text-center sm:text-justify font-Poppins text-normalmodeblue-700 dark:text-darkmodeblue-300">
                {props.title}
            </h1>
            <div className="bg-normalmodeblue-600 mx-auto sm:mx-2 w-32 sm:w-16 py-0.5 px-2 mt-1 mb-2"></div>
            <TransitionGroup>
                {props.info.map((info, key) => (
                    <CSSTransition  classNames="fade"  key={key} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
                    <React.Fragment key={key}>  
                        <div className="origin-top"> 
                            {existInfo(info.subtitle, info.link)}
                            <p className="px-2 my-0.5 font-Poppins text-neutral-800 dark:text-neutral-50 text-center sm:text-justify mb-2">
                                {info.description.split('*').map((item, i) => {
                                    return <span key={i}>{item}<br/></span>
                                })}
                            </p>
                        </div>                  
                    </React.Fragment>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
    
}



       