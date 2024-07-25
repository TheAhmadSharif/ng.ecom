// https://www.youtube.com/watch?v=wwALXMU2hjg

import { of } from 'rxjs';

import { map, filter} from 'rxjs/operators';

const numbers = [1,2, 3, 4, 5, 6];


const seqEvents = of(...numbers
    .pipe(
        filter((num) => num % 2 == 0),
        map((num) => num * num)
    )
)