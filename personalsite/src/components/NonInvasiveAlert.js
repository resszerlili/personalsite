import Alert from '@mui/material/Alert';
import '../styles/NonInvasiveAlert.css';

function NonInvasiveAlert({ description, icon, severity }) {
    return (
        <Alert className="NonInvasiveAlert" icon={icon} severity={severity}>
            {description}
        </Alert>
    );
}

export default NonInvasiveAlert;
