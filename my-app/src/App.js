import {Button} from "@mui/material"

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsIcon/>}
      variant="contained"
      color="secondary"
      size="small"
      >Settings</Button>

      <Button 
      startIcon={<Add />}
      variant="contained"
      color="success"
      size="small"
      >Add New Post</Button>

      <Button variant="outlined" disbaled>
        OUtlined
      </Button>
    </div>
  );
}

export default App;
