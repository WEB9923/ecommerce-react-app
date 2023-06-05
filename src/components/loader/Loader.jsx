import {PuffLoader} from "react-spinners";

export default function Loader() {
    return (
        <>
            <div style={{
                position:"absolute",
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)"
            }}>
                <PuffLoader
                    color="#ad0dad"
                    speedMultiplier={2.5}
                />
            </div>
        </>
    );
}

