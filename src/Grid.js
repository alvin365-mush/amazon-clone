import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Product from './Product';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Grid, makeStyles, Paper } from '@material-ui/core';

function Grid2() {

    const [products, setProducts] = useState([]);
    const [state, setState] = useState([])

    useEffect(() => {
        db
            .collection('products')
            .onSnapshot(snapshot => {
                setProducts(snapshot.docs.map(doc => doc.data()))
            })

    }, []);

    const handleImageChange = (event) => {
        setState({
            image: event.target.files[0]
        });
    };

    const profilePictureHandler = (event) => {
        event.preventDefault();
        setState({
            uiLoading: true
        });

    };

    return (
        <Card>
            <CardContent>
                <div className="profile_row">
                    <div>
                        <Typography gutterBottom variant="h4">
                            Jonny Cash
                </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit"
                            size="small"
                            startIcon={<CloudUploadIcon />}
                            className=""
                            onClick={profilePictureHandler}
                        >
                            Upload Photo
									</Button>
                        <input type="file" onChange={handleImageChange} />

                        {state.imageError ? (
                            <div className="">
                                {' '}
											Wrong Image Format || Supported Format are PNG and JPG
                            </div>
                        ) : (
                            false
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Grid2
