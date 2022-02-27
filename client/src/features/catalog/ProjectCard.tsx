import { Card, Button, CardActions, CardContent, CardMedia, Typography, CardHeader, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { Project } from "../../app/models/project";

interface Props{
    project: Project;
}

export default function ProjectCard({project}: Props)
{
    return(
        <Card>
            <CardMedia
                component="img"
                image={project.imageUrl}
                alt={project.name}
            />
            <CardActions>
                <Button component={Link} to={`/catalog/${project.id}`} size='small'>{project.name}</Button>
            </CardActions>
      </Card>
    )
}