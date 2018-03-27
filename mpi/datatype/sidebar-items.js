initSidebarItems({"fn":[["address_of","Returns the address of the argument in a format suitable for use with datatype constructors"]],"mod":[["traits","Datatype traits"]],"struct":[["DatatypeRef","A reference to an MPI data type."],["DynBuffer","An immutable dynamically-typed buffer."],["DynBufferMut","A mutable dynamically-typed buffer."],["MutView","A buffer with a user specified count and datatype"],["Partition","Adds a partitioning to an existing `Buffer` so that it becomes `Partitioned`"],["PartitionMut","Adds a partitioning to an existing `BufferMut` so that it becomes `Partitioned`"],["UserDatatype","A user defined MPI datatype"],["View","A buffer with a user specified count and datatype"]],"trait":[["AsDatatype","Something that has an associated datatype"],["Buffer","A buffer is a region in memory that starts at `pointer()` and contains `count()` copies of `as_datatype()`."],["BufferMut","A mutable buffer is a region in memory that starts at `pointer_mut()` and contains `count()` copies of `as_datatype()`."],["Collection","A countable collection of things."],["Datatype","A Datatype describes the layout of messages in memory."],["Equivalence","A direct equivalence exists between the implementing type and an MPI datatype"],["Partitioned","Describes how a `Buffer` is partitioned by specifying the count of elements and displacement from the start of the buffer for each partition."],["PartitionedBuffer","A buffer that is `Partitioned`"],["PartitionedBufferMut","A mutable buffer that is `Partitioned`"],["Pointer","Provides a pointer to the starting address in memory."],["PointerMut","Provides a mutable pointer to the starting address in memory."]],"type":[["SystemDatatype","A system datatype, e.g. `MPI_FLOAT`"]]});