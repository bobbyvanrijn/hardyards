import Grid from './Grid';
import Card from './Card';

export default function Cards(props) {
    return (
        <Grid columns={4} columnsSm={2}>
            { props.items.map((item, index) =>
                {
                    if (item.value !== undefined) {
                        return (
                            <Card key={index}>
                                <h2>{ item.value }</h2>
                                { item.label }
                            </Card>
                        )
                    }
                }
            )}
        </Grid>
    );
}