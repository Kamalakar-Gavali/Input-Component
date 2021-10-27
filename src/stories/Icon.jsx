import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
let fontSize = '23px';
const Icon = ({ iconName }) => {

    switch (iconName) {
        case 'search':
            return <SearchIcon sx={{ fontSize: fontSize }} />
            break;
        case 'lock':
            return <LockIcon sx={{ fontSize: fontSize }} />
            break;
        case 'visibility':
            return <VisibilityIcon sx={{ fontSize: fontSize }} />
            break;
        case 'cart':
            return <ShoppingCartIcon sx={{ fontSize: fontSize }} />
            break;
        case 'delete':
            return <DeleteIcon sx={{ fontSize: fontSize }} />
            break;
        default:
            return null;
            break;
    }
}
export default Icon