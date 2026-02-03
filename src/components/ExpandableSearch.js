import { useState, useRef, useEffect } from "react";
import { IconButton, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function ExpandableSearch({onSearch}) {
  const [open, setOpen] = useState(false);
  const [value,setValue]=useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current.focus();
  }, [open]);


  const handleSearch = () => onSearch?.(value);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          width: 40,
          height: 40,
          "&:hover": { backgroundColor: "#1f8f6a" },
        }}
      >
        <SearchIcon sx={{ color: "black" }} />
      </IconButton>

      {open && (
        <InputBase
          inputRef={inputRef}
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          placeholder="Search products"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          onBlur={() => setOpen(false)}
          sx={{
            px: 2,
            py: 1,
            width: 220,
            border: "1px solid lightgrey",
            borderRadius: "20px",
          }}
        />
      )}
    </Box>
    
  );
}

export default ExpandableSearch;
