import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ITodoCardProps from './TodoCard.props'
import './TodoCard.scss'
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { changeTodoStatus } from '../../Store/Actions/todoActions';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const TodoCard: FunctionComponent<ITodoCardProps> = ({ className, id, title, content, date, status, onEdit }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleStatusChange = () => {
        const _status: 'todo' | 'completed' = status === 'completed' ? 'todo' : 'completed'
        dispatch(changeTodoStatus(id, _status))
    }

    return (
        <Card className={`${className} ${classes.root}`} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {date}
                </Typography>
                <Typography variant="body2" component="p">
                    {content}
                </Typography>
            </CardContent>
            <CardActions className="actions">
                <Button size="small" onClick={onEdit}>Edit</Button>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={status === 'completed'}
                            onChange={handleStatusChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Done"
                />
            </CardActions>
        </Card>
    )
}