import { Badge } from './badge';

type TagProps = {
    name: string;
};

export default function Tag({ name }: TagProps) {
    return <Badge variant="outline">{name}</Badge>;
}
