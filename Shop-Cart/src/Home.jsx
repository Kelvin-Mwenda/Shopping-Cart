import { Outlet } from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap/scss/bootstrap.scss';
import "bootstrap/dist/css/bootstrap.min.css";



export default function Home(){


    return(
        <>
            <div className="root-layout">
                <main>
                  <Outlet/>
                </main>
            </div>
        </>
    )
}