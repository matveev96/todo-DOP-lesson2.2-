import {UpdateItem} from "./components/UpdateItem";
import styles from './Styles.module.css';
import {CheckBox} from "./components/CheckBox";
import {Button} from "./components/Button";
import {RouteType} from "./FlightTable";

type RouteProps = {
    route: RouteType
    toggleFTIsBooked: (flightTableID: string, routeID: string) => void;
    flightTableID: string;
    updateFTRoutesFrom: (flightID: string, routeID: string, newFrom: string) => void;
    updateFTRoutesTo: (flightID: string, routeID: string, newTo: string) => void;
    removeFTRoute: (flightTableID: string, routeID: string) => void

};

export const Route = ({
                          route,
                          toggleFTIsBooked,
                          flightTableID,
                          updateFTRoutesFrom,
                          updateFTRoutesTo,
                          removeFTRoute
                      }: RouteProps) => {
    const handleRemoveFTRoute = () => {
        removeFTRoute(flightTableID, route.id)
    };

    const handleUpdateRouteFrom = () => {
        // updateFTRoutesFrom()
    };

    const handleUpdateRouteTo = () => {
        //updateFTRoutesTo();
    }

    const handleToggleFTIsBooked = () => {
        toggleFTIsBooked(flightTableID, route.id)
    }

    return (
        <>
            <table className={styles.ftTable}>
                <tbody>
                <tr className={styles.ftRow}>
                    <td className={styles.ftCell}>
                        <Button onClick={handleRemoveFTRoute} title={'X'}/>
                    </td>
                    <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
                        <UpdateItem oldTitle={route.from} callBack={() => 'handleUpdateRouteFrom'}/>
                    </td>
                    <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
                        ➔
                    </td>
                    <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
                        <UpdateItem oldTitle={route.to} callBack={() => 'handleUpdateRouteTo'}/>
                    </td>
                    <td className={styles.checkboxContainer}>
                        <label>
                            <CheckBox isDone={route.isBooked} updateCheckBox={handleToggleFTIsBooked}/>
                            {route.isBooked ? ' Booked' : ' Available'}
                        </label>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

