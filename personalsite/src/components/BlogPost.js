import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function BlogPostCard() {
    return (
        <Card sx={{ maxWidth: 675 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Title
                </Typography>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/"
                    alt="Image"
                />
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default BlogPostCard;