import Grid from './Grid';
import Card from './Card';

export default function Cards(props) {
    function Title() {
        return (
            props.title !== undefined ?
            <h3 id='card-title'>{ props.title }</h3> :
            null
        );
    }

    return (
        <>
            <Title />

            <Grid
                ariaDescribedby='card-title'
                columns={4}
                columnsSm={2}
                element='ul'
            >

                { props.items.map((item, index) =>
                    {
                        if (item.value !== undefined) {
                            return (
                                <Card key={index}>
                                    <h4 id={`card-${index}`}>
                                        { item.label }
                                    </h4>
                                    <span aria-describedby={`card-${index}`}>
                                        { item.value }
                                    </span>
                                </Card>
                            )
                        }
                    }
                )}
            </Grid>
        </>
    );
}