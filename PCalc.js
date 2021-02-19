function bitWize(left, op, right)
{
    switch(op)
    {
        case "AND": return left & right;
        case "OR": return left | right;
        case "XOR": return left ^ right;
        case "NOT": return ~ left;
        case "LSHIFT": return left << right;
        case "RSHIFT": return left >> right;
    }
}
