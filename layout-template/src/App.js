import {Box} from "@mui/material";
import Navbar from "./components/Layout/Navbar";
import TabBar from "./components/Layout/TabBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Repository from "./components/Repository";
import Favorite from "./components/Favorite";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Route
                  path="/"
                  render={(history)=>(
                       <Box>
                            <Navbar/>
                            <TabBar history={history}/>
                            {/*<Stack direction="row" spacing={2} justifyContent="space-between">*/}
                            {/*    <Sidebar/>*/}
                            {/*    <Contents/>*/}
                            {/*</Stack>*/}
                      </Box>
                      )}
                  />

                <Switch>
                    <Route path="/repository" component={Repository}/>
                    <Route path="/favorites" component={Favorite}/>
                </Switch>
    </BrowserRouter>
      </div>
  );
}

export default App;
